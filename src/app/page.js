import Hero from "./components/home/hero/Hero";
import SlideTech from "./components/slideTechnologies/SlideTech";
import BuildRead from "./components/buildRead/BuildRead";
export default function Home() {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "77px", paddingBottom: "5.68rem" }}
      >
        <Hero />
      </div>
      <SlideTech />
      <BuildRead />
    </>
  );
}

// const styles = {
//   hello: {
//     color: "var(--primary-color)",
//   },
// };
