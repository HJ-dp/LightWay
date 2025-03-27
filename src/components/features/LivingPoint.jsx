import ItemList from "../common/ItemList";
import ListItem from "../common/ListItem";

export default function LivingPoint({ title = "다이어트 리빙포인트" }) {
  const dietLivingPoint = [
    {
      title: "배고프면 일단 물부터 마셔라.",
      content:
        "👉 가짜 배고픔 80%는 수분 부족이다. 배고프면 컵 들고 조용히 물부터 원샷.\n(진짜 배고픔이면 30분 후에도 배고프다.)",
    },
    {
      title: "네가 지금 먹고 싶은 건 음식이 아니라 감정.",
      content:
        "👉 스트레스? 심심함? 외로움?\n초콜릿 대신 산책, 친구랑 수다, 아니면 그냥 울어. 먹지 마.",
    },
    {
      title: "저녁 7시 금식? 웃기지 마라. 중요한 건 총량.",
      content:
        "👉 밤에 먹어도 하루 섭취량 넘지 않으면 안 찐다.\n근데 야식은 과식이랑 친구라서 위험한 건 맞음.",
    },
    {
      title: "식이섬유는 장의 VIP.",
      content:
        "👉 채소, 통곡물, 과일은 포만감 챙기고 변비도 막아줌.\n식단에 초록이 없다? 너 지금 장기 버리는 중이다.",
    },
    {
      title: "운동으로 살 못 뺀다. 입이 문제.",
      content:
        "👉 헬스 1시간 = 케이크 한 조각 \n 먹는 게 80%, 운동은 보조임. 입 단속이 핵심이다.",
    },
    {
      title: "눈은 배보다 크다. 접시부터 작게.",
      content:
        "👉 뇌는 양보다 '다 먹었다'는 느낌에 만족함.\n작은 접시에 담고 느리게 씹어. 체한 게 아니라 뇌가 늦는 거야.",
    },
    {
      title: "배고픔 체크: 사과 테스트",
      content:
        '👉 "지금 사과 줄게, 먹을래?" 했을 때 안 땡기면 그건 진짜 배고픈 거 아님.\n배고픈 게 아니라 뭐라도 씹고 싶은 중독 상태.',
    },
    {
      title: "몸무게는 증발 안 한다. 일관성이 답.",
      content:
        "👉 3일 굶고 1일 폭식하면 끝이다.\n하루 500kcal 적자 = 1주일 0.5kg 감량. 과학이다. 마법 아님.",
    },
    {
      title: "다이어트는 프로젝트가 아니라 라이프스타일.",
      content:
        "👉 2주 단기? 다시 찐다.\n평생 할 수 있을 만큼만 하자.\n진짜 잘하는 사람은 오래 하는 사람이다.",
    },
  ];

  return (
    <ItemList title={title}>
      {dietLivingPoint.map((item, index) => (
        <ListItem key={index} title={item.title} content={item.content} />
      ))}
    </ItemList>
  );
}
