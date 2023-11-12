import { Header } from "../components/Header/Header";
import { useNavigate } from "react-router-dom";

export const AppHeader = () => {
  const navigate = useNavigate();
  return (
    <Header
      title="掲示板"
      buttonText="スレッドをたてる"
      onClick={() => {
        navigate("thread/new");
      }}
    />
  );
};
