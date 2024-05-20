import "./App.css";
import NewsComponent from "./components/news";

function App() {
  return (
    <>
      <NewsComponent day={13} month={"JAN"} authorId={1} newsId={1} />
      <NewsComponent day={14} month={"JAN"} authorId={2} newsId={2} />
      <NewsComponent day={15} month={"JAN"} authorId={1} newsId={3} />

      <div class="pagination">
        <div class="item">
          <span>&#8249;</span>
        </div>
        <div class="item active">
          <span>1</span>
        </div>
        <div class="item">
          <span>2</span>
        </div>
        <div class="item">
          <span>3</span>
        </div>
        <div class="item">
          <span>4</span>
        </div>
        <div class="item">
          <span>5</span>
        </div>
        <div class="item">
          <span>&#8250;</span>
        </div>
      </div>
    </>
  );
}

export default App;
