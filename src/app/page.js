// TODO:  Build main page
//        - Make a Hero with description what this site is about
//        - Ideally "most favourited", when favourite functional will be made



import Showcase from "@/components/showcase";

export default function Home() {
  return (
    <main>
      <Showcase type="dessert"/>
      <Showcase type="breakfast"/>
      <Showcase type="pasta"/>
      <Showcase type="side"/>
      <Showcase type="starter"/>
      <Showcase type="seafood"/>
    </main>
  );
}
