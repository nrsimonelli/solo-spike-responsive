import React from "react";

const Content = ({ styles }) => {
  const { showSidebar } = styles;

  const contentStyle = {
    paddingTop: showSidebar ? 20 : styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: showSidebar ? 20 : styles.footerMenuHeight + 20,
    paddingLeft: showSidebar ? styles.sidebarWidth + 20 : 20
  };

  return (
    <div style={contentStyle}>
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ marginBottom: 0 }}>Relatively Unremarkable Intro</h2>
        <p>Praesent consectetur urna eget lectus ultricies dictum. Quisque faucibus molestie est. Duis blandit ante justo, et molestie augue pharetra vitae. Donec id finibus odio, sit amet dictum eros. Proin consequat odio lorem, quis fermentum ex tristique lacinia. Vivamus non gravida lorem. Maecenas sit amet ornare justo. In tempor risus nec sem tempus accumsan. Phasellus est augue, euismod fermentum libero id, ultrices viverra odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ marginBottom: 0 }}>Some Witty Remarks</h2>
       <p>Vestibulum posuere egestas lectus eu consequat. Nam luctus tristique nisi sit amet lobortis. Nullam sem tortor, condimentum sed elementum in, tincidunt id arcu. Phasellus erat nibh, molestie sed maximus vel, rutrum ullamcorper mi. Phasellus ut lobortis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc aliquam enim suscipit massa tempor tempor. Sed aliquet maximus sapien, sed consectetur ex. Quisque id ligula eget erat ullamcorper vehicula quis et sapien. Sed finibus felis in rutrum venenatis. Integer porttitor augue at dui dapibus, a aliquet turpis maximus. </p>
      </div>
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ marginBottom: 0 }}>The Hard Hitting Stuff</h2>
       <p>Aenean lobortis ut quam in volutpat. Vestibulum sed arcu egestas, facilisis magna a, vehicula nibh. In suscipit hendrerit tortor, in finibus ex iaculis in. Sed non massa convallis, tincidunt odio eget, elementum urna. Duis nibh est, pellentesque eget diam vel, gravida fringilla mauris. Aenean pretium nisl vitae neque tristique, et dictum turpis fermentum. Aliquam viverra, elit et mattis porttitor, ante nunc cursus nibh, nec vulputate purus ipsum et sapien. Quisque vel varius elit, non volutpat neque. Phasellus dignissim, est eu elementum placerat, magna nibh aliquam odio, et tincidunt erat lorem at justo. Aliquam in lacus orci. Nunc vitae massa tincidunt, egestas odio eget, egestas nisl. Proin at odio sagittis nibh pellentesque gravida eu id sapien. Donec egestas vitae magna sed venenatis. Mauris et nunc ut urna consequat semper. Nam non risus id magna pretium accumsan. Nullam fringilla augue volutpat, maximus elit et, tincidunt dolor. </p> 
      </div>
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ marginBottom: 0 }}>A Somber Conclusion</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique nulla aliquet enim tortor at auctor urna nunc id. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Fermentum iaculis eu non diam phasellus. Tincidunt id aliquet risus feugiat in ante. Euismod quis viverra nibh cras. Cras ornare arcu dui vivamus. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Condimentum id venenatis a condimentum vitae. Molestie nunc non blandit massa. Diam maecenas sed enim ut sem viverra aliquet eget sit. Urna nec tincidunt praesent semper.</p>
      </div>  
    </div>
  )
};

export default Content;
