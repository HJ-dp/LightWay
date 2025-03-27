import styled from "@emotion/styled";
import React, { useState, useEffect, useRef } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const values = [83, 75, 90, 60, 40, 200]; // 정해진 수치 배열
const intervalTime = 2000;

export default function BMICalculator({ weight = 60, Height = 172 }) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0); // useRef로 index 값 유지
  const chartRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % values.length;
      setIndex(indexRef.current);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const bmi = values[index] / ((Height / 100) * (Height / 100));
  function labels(bmi) {
    if (bmi >= 35) return "초고도 비만";
    else if (bmi >= 30) return "2단계 비만";
    else if (bmi >= 25) return "1단계 비만";
    else if (bmi >= 23) return "과체중";
    else if (bmi >= 18.5) return "정상체중";
    else return "저체중";
  }

  // 바늘(Indicator) 그리는 커스텀 플러그인
  const needlePlugin = {
    id: "needle",
    afterDraw: (chart) => {
      const {
        ctx,
        chartArea: { width, height },
      } = chart;
      // 바늘 위치와 길이
      const centerX = width / 2;
      const centerY = height - centerX / 2;
      const needleLength = height / 3.5;

      const targetBmi = chart.config.options.plugins.needle.bmi;

      // BMI 값을 0~40 범위에서 -90° ~ +90°로 매핑 (180도 내에서만 회전)
      let cAngle =
        (((targetBmi > 40 ? 40 : targetBmi) / 40) * 180 - 180) *
        (Math.PI / 180);
      // 이전 바늘 위치 (state처럼 사용)
      if (!chart.needleAngle) {
        chart.needleAngle = cAngle > 40 ? 40 : cAngle;
      }

      // 변경된 바늘 각
      const newAngle = cAngle;
      chart.needleAngle += (newAngle - chart.needleAngle) * 0.1; // 부드러운 변화

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(chart.needleAngle);
      ctx.beginPath();
      ctx.moveTo(0, -5); // 바늘 시작점
      ctx.lineTo(needleLength, 0); // 바늘 끝점
      ctx.lineTo(0, 5);
      ctx.fillStyle = "red"; // 바늘 색상
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.font = "20px Arial";
      ctx.fillStyle = "black"; // 텍스트 색상
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(targetBmi.toFixed(2), 0, 10); // BMI 값 (소수점 1자리)
      ctx.restore();

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.font = "18px Arial";
      ctx.fillStyle = "Crimson";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(labels(targetBmi), 0, 30);
      ctx.restore();
      if (Math.abs(chart.needleAngle - newAngle) > 0.01) {
        requestAnimationFrame(() => {
          chart.draw(); // 차트 전체가 아니라 **바늘만 다시 그림**
        });
      }
    },
  };

  const data = {
    labels: [
      "저체중",
      "정상",
      "과체중",
      "1단계 비만",
      "2단계 비만",
      "고도 비만",
    ],
    datasets: [
      {
        data: [18.5, 4.4, 2, 5, 5, 5], // 현재 값과 나머지
        backgroundColor: [
          "#A2C8FF",
          "#28A745",
          "#FFC107",
          "#FF7F00",
          "#FF3B30",
          "#D32F2F",
        ], // 현재 값 색상 & 나머지
        borderWidth: 0,
        cutout: "50%", // 도넛 두께 조절
        rotation: -90, // 시작 위치 (반원 만들기)
        circumference: 180, // 반만 보이도록 설정
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    rotation: -90,
    circumference: 180,
    plugins: {
      tooltip: { enabled: false },
      datalabels: {
        display: false,
        color: "#fb0505",
        font: { size: 32, weight: "bold" },
      },
      legend: {
        display: false,
        onClick: (e) => e.stopPropagation(),
      },
      needle: { bmi }, // BMI 값을 직접 넘겨줌
    },
  };

  return (
    <BMIContainer>
      <Doughnut
        ref={chartRef}
        data={data}
        options={options}
        plugins={[needlePlugin]}
      />
    </BMIContainer>
  );
}

const BMIContainer = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: blue;
`;
