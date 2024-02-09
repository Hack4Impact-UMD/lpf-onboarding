import "./page.css";
import Display from "./counter/Display/Display";

export default function Home() {
  return (
    <main className="page">
      <div>
        <Display />
      </div>
    </main>
  );
}
