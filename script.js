const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const links = document.querySelector(".nav_link");
  const home = document.querySelector(".home-page");
  const divContainer = document.createElement("div");
  const linksChilds = Array.from(links.children);
  const property = {
    color: "#fff",
    fontSize: "32px",
    fontFamily: '"Poppins", sans-serif',
    fontWeight: "600px",
    lineHeight: "44px",
    textDecoration: "none",
  };

  divContainer.style.backgroundColor = "#6070FF";
  img.src = "statics/images/Toolbar.png";
  img.style.float = "right";
  img.style.marginRight = "1rem";
  img.addEventListener("mouseover", () => {
    img.style.cursor = "pointer";
  });
  links.style.display = "block";
  links.style.clear = "both";
  divContainer.style.zIndex = "999";
  divContainer.style.position = "fixed";
  divContainer.style.top = "0";
  divContainer.style.height = "130vh";
  divContainer.style.width = "inherit";
  div.style.marginTop = "40px";
  links.style.listStyle = "none";
  img.addEventListener("click", () => {
    divContainer.style.display = "none";
  });

  div.appendChild(img);
  div.appendChild(links);
  divContainer.append(div);
  home.appendChild(divContainer);

  for (let i = 0; i < linksChilds.length; i += 1) {
    const eltChildren = linksChilds[i].children;
    eltChildren[0].addEventListener("click", () => {
      divContainer.style.display = "none";
    });
    linksChilds[i].style.marginBottom = "20px";
    Object.assign(eltChildren[0].style, property);
  }
});

const projects = {
  mwp1: {
    name: "Tonic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    img: "statics/images/Snapshoot_Portfolio.png",
    technolgies: ["html", "css", "javascript"],
    linkToLiveVersion: "#",
    linkToSource: "#",
    generalInf: ["CANOPY", "Back End Dev", 2015],
  },
  mwp2: {
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    img: "statics/images/Snapshoot_Portfolio1.png",
    technolgies: ["html", "Ruby on rails", "css", "javascript"],
    linkToLiveVersion: "#",
    linkToSource: "#",
    generalInf: ["FACEBOOK", "Full Stack Dev", 2015],
  },
  mwp3: {
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    img: "statics/images/Snapshoot_Portfolio2.png",
    technolgies: ["html", "css", "javascript"],
    linkToLiveVersion: "#",
    linkToSource: "#",
    generalInf: ["CANOPY", "Back End Dev", 2015],
  },
  mwp4: {
    name: "Multi-Post Stories",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    img: "statics/images/Snapshoot_Portfolio3.png",
    technolgies: ["html", "Ruby on rails", "css", "javascript"],
    linkToLiveVersion: "#",
    linkToSource: "#",
    generalInf: ["FACEBOOK", "Full Stack Dev", 2015],
  },
};

const popUpBtn = document.querySelectorAll(".btn");
console.log(popUpBtn);
popUpBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)");
    // Check if the media query is true
    if (mediaQuery.matches) {
      const container = document.createElement("div");
      const propContainer = {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "16px",
        gap: "12px",
        position: "absolute",
        width: "60vw",
        height: "100vh",
        left: "calc(50% - 60vw/2)",
        background: "#fff",
        border: "1px solid #dfe1e6",
        borderRadius: "16px",
        top: "0",
        flex: "none",
        order: "0",
        flexGrow: "0",
        overflow: "auto",
      };
      Object.assign(container.style, propContainer);
      const topBar = document.createElement("div");
      const topBarProp = {
        width: "inherit",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        flex: "1",
        justifyContents: "space-between",
      };
      Object.assign(topBar.style, topBarProp);
      container.appendChild(topBar);
      const close = document.createElement("span");
      const closeProperty = {
        display: "flex",
        flexDirection: "row",
        color: "#aaa",
        clear: "none",
        fontSize: "28px",
        fontWeight: "bold",
      };

      close.addEventListener("mouseover", () => {
        close.style.cursor = "pointer";
        close.style.color = "#000";
        close.style.textDecoration = "none";
      });
      Object.assign(close.style, closeProperty);
      close.innerHTML = "&times;";
      const title = document.createElement("p");

      const propTitle = {
        display: "flex",
        flexDirection: "row",
        width: "70%",
        height: "16px",
        fontFamily: '"Poppins", sans-serif',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "44px",
        color: "#172b4d",
        order: "0",
        margin: "0",
      };
      Object.assign(title.style, propTitle);
      topBar.appendChild(title);
      topBar.appendChild(close);
      const modal = document.createElement("div");
      const propModal = {
        display: "none",
        position: "fixed",
        zIndex: "99",
        left: "0",
        top: "0",
        width: "100%",
        maxHeight: "100%",
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: "100px",
      };
      Object.assign(modal.style, propModal);
      modal.appendChild(container);

      modal.style.display = "block";
      const parentElt = btn.parentElement.parentElement.parentElement;
      const parentId = parentElt.className;
      console.log(parentId);
      parentElt.append(modal);

      title.innerHTML = projects[parentId].name;

      const roles = document.createElement("span");
      const rolesProperty = {
        width: "236px",
        height: "16px",
        paddingTop: "20px",
        fontFamily: '"Poppins", sans-serif',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "13px",
        lineHeight: "16px",
        flex: "none",
        order: "1",
        flexGrow: "0",
      };
      Object.assign(roles.style, rolesProperty);
      roles.innerHTML = projects[parentId].generalInf.join(" &bullet; ");
      container.appendChild(roles);

      const imgContainer = document.createElement("div");
      imgContainerProperty = {
        width: "98%",
        height: "80%",
        background: `url(${projects[parentId].img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "98% 80%",
        borderRadius: "8px",
        flex: "none",
        order: "2",
        flexGrow: "0",
      };

      Object.assign(imgContainer.style, imgContainerProperty);

      container.appendChild(imgContainer);

      const detsContainer = document.createElement("div");
      const detsProperty = {
        width: "inherit",
        height: "auto",
        gap: "40px",
        display: "flex",
        flexDirection: "row",
        flex: "1",
        order: "3",
        justifyContents: "space-between",
      };

      Object.assign(detsContainer.style, detsProperty);
      const descContainer = document.createElement("p");

      const descContainerProperty = {
        width: "311px",
        height: "auto",
        fontFamily: '"Poppins", sans-serif',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "24px",
        color: "#344563",
        flex: "none",
        order: "0",
        flexGrow: "0",
      };

      Object.assign(descContainer.style, descContainerProperty);
      descContainer.innerHTML = projects[parentId].description.substring(
        0,
        Math.max(130, Math.floor(0.4 * projects[parentId].description.length))
      );
      detsContainer.appendChild(descContainer);

      const tagsbtnContainer = document.createElement("div");
      const tagsbtnContainerProperty = {
        display: "flex",
        flexDirection: "column",
        margin: "0",
        padding: "0",
        gap: "20px",
        width: "auto",
        height: "24px",
        flex: "none",
        order: "1",
        flexGrow: "0",
      };
      Object.assign(tagsbtnContainer.style, tagsbtnContainerProperty);
      const tagsContainer = document.createElement("div");
      const tagsContainerProperty = {
        display: "flex",
        flexDirection: "row",
        alignItems: "inherit",
        margin: "0",
        padding: "0",
        gap: "8px",
        width: "auto",
        height: "24px",
        flex: "none",
        order: "0",
        flexGrow: "0",
      };

      Object.assign(tagsContainer.style, tagsContainerProperty);

      projects[parentId].technolgies.forEach((tag) => {
        const tagCont = document.createElement("span");
        tagProperty = {
          alignItems: "center",
          padding: "4px 12px",
          width: "auto",
          height: "24px",
          background: "#ebebff",
          borderRadius: "8px",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0.03em",
          color: "#6070ff",
        };
        Object.assign(tagCont.style, tagProperty);
        tagCont.innerHTML = tag;
        tagsContainer.appendChild(tagCont);
      });
      tagsbtnContainer.appendChild(tagsContainer);
      detsContainer.appendChild(tagsbtnContainer);
      container.appendChild(detsContainer);

      const buttonContainer = document.createElement("div");

      const buttonContainerProperty = {
        display: "flex",
        flexDirection: "row",
        paddingTop: "20px",
        gap: "10px",
        width: "311px",
        height: "56px",
        flex: "none",
        order: "1",
        flexGrow: "0",
      };

      Object.assign(buttonContainer.style, buttonContainerProperty);

      const liveBtn = document.createElement("button");
      const srcBtn = document.createElement("button");
      const btnProperty = {
        boxSizing: "border-box",
        alignItems: "center",
        padding: "12px 22px",
        width: "136px",
        height: "48px",
        bottom: "4px",
        border: "1px solid #6070ff",
        borderRadius: "8px",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "15px",
        lineHeight: "20px",
        textAlign: "center",
        color: "#396dfe",
      };

      Object.assign(liveBtn.style, btnProperty);
      Object.assign(srcBtn.style, btnProperty);
      liveBtn.innerHTML = "See Live";
      srcBtn.innerHTML = "See Source";
      buttonContainer.appendChild(liveBtn);
      buttonContainer.appendChild(srcBtn);
      tagsbtnContainer.appendChild(buttonContainer);

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      close.onclick = function () {
        modal.style.display = "none";
      };
    } else {
      const container = document.createElement("div");
      const propContainer = {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContents: "flex-start",
        paddingLeft: "16px",
        gap: "12px",
        position: "absolute",
        width: "343px",
        height: "100vh",
        left: "calc(50% - 343px/2)",
        background: "#fff",
        border: "1px solid #dfe1e6",
        borderRadius: "16px",
        top: "0",
        flex: "none",
        order: "0",
        flexGrow: "0",
        overflow: "auto",
      };
      Object.assign(container.style, propContainer);
      const topBar = document.createElement("div");
      const topBarProp = {
        width: "inherit",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        flex: "1",
        justifyContents: "space-between",
      };
      Object.assign(topBar.style, topBarProp);
      container.appendChild(topBar);
      const close = document.createElement("span");
      const closeProperty = {
        color: "#aaa",
        clear: "none",
        fontSize: "28px",
        fontWeight: "bold",
      };

      close.addEventListener("mouseover", () => {
        close.style.cursor = "pointer";
        close.style.color = "#000";
        close.style.textDecoration = "none";
      });
      Object.assign(close.style, closeProperty);
      close.innerHTML = "&times;";
      const title = document.createElement("p");

      const propTitle = {
        width: "259px",
        height: "16px",
        fontFamily: '"Poppins", sans-serif',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "32px",
        lineHeight: "44px",
        color: "#172b4d",
        order: "0",
        margin: "0",
      };
      Object.assign(title.style, propTitle);
      topBar.appendChild(title);
      topBar.appendChild(close);
      const modal = document.createElement("div");
      const propModal = {
        display: "none",
        position: "fixed",
        zIndex: "99",
        left: "0",
        top: "0",
        width: "100%",
        maxHeight: "100%",
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgba(0,0,0,0.4)",
      };
      Object.assign(modal.style, propModal);
      modal.appendChild(container);

      modal.style.display = "block";
      const parentElt = btn.parentElement.parentElement.parentElement;
      const parentId = parentElt.className;
      console.log(parentId);
      parentElt.append(modal);

      title.innerHTML = projects[parentId].name;

      const roles = document.createElement("span");
      const rolesProperty = {
        width: "236px",
        height: "16px",
        paddingTop: "20px",
        fontFamily: '"Poppins", sans-serif',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "13px",
        lineHeight: "16px",
        flex: "none",
        order: "1",
        flexGrow: "0",
      };
      Object.assign(roles.style, rolesProperty);
      roles.innerHTML = projects[parentId].generalInf.join(" &bullet; ");
      container.appendChild(roles);

      const imgContainer = document.createElement("div");
      imgContainerProperty = {
        width: "311px",
        height: "220px",
        background: `url(${projects[parentId].img})`,
        borderRadius: "8px",
        flex: "none",
        order: "2",
        flexGrow: "0",
      };

      Object.assign(imgContainer.style, imgContainerProperty);

      container.appendChild(imgContainer);

      const descContainer = document.createElement("p");

      const descContainerProperty = {
        width: "311px",
        height: "auto",
        fontFamily: '"Poppins", sans-serif',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "15px",
        lineHeight: "24px",
        color: "#344563",
        flex: "none",
        order: "3",
        flexGrow: "0",
      };

      Object.assign(descContainer.style, descContainerProperty);
      descContainer.innerHTML = projects[parentId].description.substring(
        0,
        Math.max(130, Math.floor(0.4 * projects[parentId].description.length))
      );
      container.appendChild(descContainer);

      const tagsContainer = document.createElement("div");
      const tagsContainerProperty = {
        display: "flex",
        flexDirection: "row",
        alignItems: "inherit",
        margin: "0",
        padding: "0",
        gap: "8px",
        width: "auto",
        height: "24px",
        flex: "none",
        order: "4",
        flexGrow: "0",
      };

      Object.assign(tagsContainer.style, tagsContainerProperty);

      projects[parentId].technolgies.forEach((tag) => {
        const tagCont = document.createElement("span");
        tagProperty = {
          alignItems: "center",
          padding: "4px 12px",
          width: "auto",
          height: "24px",
          background: "#ebebff",
          borderRadius: "8px",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0.03em",
          color: "#6070ff",
        };
        Object.assign(tagCont.style, tagProperty);
        tagCont.innerHTML = tag;
        tagsContainer.appendChild(tagCont);
      });
      container.appendChild(tagsContainer);

      const buttonContainer = document.createElement("div");

      const buttonContainerProperty = {
        display: "flex",
        flexDirection: "row",
        paddingTop: "20px",
        gap: "10px",
        width: "311px",
        height: "56px",
        flex: "none",
        order: "5",
        flexGrow: "0",
      };

      Object.assign(buttonContainer.style, buttonContainerProperty);

      const liveBtn = document.createElement("button");
      const srcBtn = document.createElement("button");
      const btnProperty = {
        boxSizing: "border-box",
        alignItems: "center",
        padding: "12px 22px",
        width: "136px",
        height: "48px",
        bottom: "4px",
        border: "1px solid #6070ff",
        borderRadius: "8px",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "15px",
        lineHeight: "20px",
        textAlign: "center",
        color: "#396dfe",
      };

      Object.assign(liveBtn.style, btnProperty);
      Object.assign(srcBtn.style, btnProperty);
      liveBtn.innerHTML = "See Live";
      srcBtn.innerHTML = "See Source";
      buttonContainer.appendChild(liveBtn);
      buttonContainer.appendChild(srcBtn);
      container.appendChild(buttonContainer);

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
      close.onclick = function () {
        modal.style.display = "none";
      };
    }
  });
});
