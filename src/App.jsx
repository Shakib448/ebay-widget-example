import "./App.css";
import EbayItemsWidget from "ebay-items-react-widget";

function App() {
  return (
    <div className="App">
      <EbayItemsWidget
        carouselOptions={{
          animation: "slide",
          autoPlay: true,
          interval: 5000,
          indicators: false,
          stopAutoPlayOnHover: true,
        }}
        defaultView="gallery"
        imageSearchEndpoint="http://localhost:3001/search_by_image"
        searchEndpoint="http://localhost:3001/search"
        searchTerm="Sneakers"
      />
    </div>
  );
}

export default App;
