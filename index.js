const h1Ele = document.createElement("h1");

document.body.style.textAlign = "center";

document.body.append(h1Ele);

setTimeout(() => {
  h1Ele.innerText = 10;
  setTimeout(() => {
    h1Ele.innerText = 9;
    setTimeout(() => {
      h1Ele.innerText = 8;
      setTimeout(() => {
        h1Ele.innerText = 7;
        setTimeout(() => {
          h1Ele.innerText = 6;
          setTimeout(() => {
            h1Ele.innerText = 5;
            setTimeout(() => {
              h1Ele.innerText = 4;
              setTimeout(() => {
                h1Ele.innerText = 3;
                setTimeout(() => {
                  h1Ele.innerText = 2;
                  setTimeout(() => {
                    h1Ele.innerText = 1;
                    setTimeout(() => {
                      h1Ele.innerText = "Happy Independence day";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
