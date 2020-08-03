import React, { Component } from "react";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    const { windowWidth } = this.state;

    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooterMenuText: windowWidth > 500,
      showSidebar: windowWidth > 768,
      sidebarWidth: windowWidth < 1100 ? 50 : 150,
      sidebarCollapsed: windowWidth < 1100
    };

    const menuItems = styles.showSidebar
      ? [
          { icon: 'a', text: "Item 1" },
          { icon: 'b', text: "Item 2" },
          { icon: 'c', text: "Item 3" },
          { icon: 'd', text: "Item 4" },
          { icon: 'e', text: "Item 5" },
          { icon: 'f', text: "Profile" },
          { icon: 'g', text: "Settings" }
        ]
      : [
          { icon: 'a', text: "Item 1" },
          { icon: 'b', text: "Item 2" },
          { icon: 'c', text: "Item 3" },
          { icon: 'd', text: "Item 4" },
          { icon: 'e', text: "Item 5" }
        ];

    return (
      <div
        style={{
          backgroundColor: styles.black(0.05),
          minHeight: "100vh",
          position: "relative"
        }}
      >
        {styles.showSidebar ? (
          <Sidebar menuItems={menuItems} styles={styles} />
        ) : (
          <Header styles={styles} />
        )}

        <Content styles={styles} />

        {!styles.showSidebar && (
          <Footer menuItems={menuItems} styles={styles} />
        )}
      </div>
    );
  }
}

export default App;