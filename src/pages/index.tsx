import Stack from "../components/Stack";
import Buttons from "@/components/Buttons";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";

export default function Home() {
  return (
    <main>
      <Header />
      <SearchInput />
      <Buttons />
      <Stack />
    </main>
  );
}
