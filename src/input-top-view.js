var id = '__global-tip-box';
var tipBox = document.querySelector("#" + id);

function fillText (text) {
  if (!tipBox) {
    tipBox = document.createElement('div')
    // Set color to purple
    tipBox.style.color = 'purple';
    tipBox.id = id;
    tipBox.style.position = "absolute";
    tipBox.style.padding = "0.3rem";
    tipBox.style.width = "100%";
    tipBox.style.top = 0;
    tipBox.style.left = 0;
    tipBox.style.backgroundColor = '#e5e5e5';
    tipBox.style.boxShadow = '0px 1px 7px #666';

    tipBox.innerHTML = text;
    document.getElementsByTagName("body").item(0).appendChild(tipBox);
  } else {
    tipBox.style.display = 'block';
    tipBox.innerHTML = text || '&nbsp;';
  }
}

function hideText () {
  if (!tipBox) {
    return false;
  } else {
    tipBox.style.display = 'none';
  }
}


export default {
  inserted: function (el, binding) {
    console.log("inserted", binding)
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
      var els = el.getElementsByTagName('input')
      if (els.length !== 1) {
        // throw new Error("v-money requires 1 input, found " + els.length)
      } else {
        el = els[0]
      }
    }

    el.oninput = function () {
      fillText(el.value)
      el.dispatchEvent(new Event('change'))
    }

    el.onfocus = function () {
      console.log(el.value)
      fillText(el.value)
    }

    el.onblur = function () {
      hideText()
    }

  }
}