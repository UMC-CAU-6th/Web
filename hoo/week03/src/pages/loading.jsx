import { BasicContainer, Loader, LoaderText } from "./style";

export default function LoadingPage() {
  return (
    <BasicContainer>
      <Loader />
      <LoaderText>정보를 불러오는 중입니다...</LoaderText>
    </BasicContainer>
  );
}
