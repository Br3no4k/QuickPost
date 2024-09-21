import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Banner } from "./components/banner/Banner";
import { PostForm } from "./components/postform/PostForm";
import { Footer } from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Banner imageUrl="https://media3.giphy.com/media/nHaF5cJanabVk86MLJ/giphy.webp?cid=ecf05e47ra8rbxb03mebicexozmdo5a3k4jkfetor35f7nu6&ep=v1_gifs_search&rid=giphy.webp&ct=g" />
        <PostForm />
        <Footer /> 
      </>
    );
  }
}

export default App;