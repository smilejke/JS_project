export default class Router {
  constructor(routes, mode, root) {
    this.routes = routes;
    this.mode = mode;
    this.root = root;
  }

  config(options) {
    this.mode =
      options &&
      options.mode &&
      options.mode == "history" &&
      !!history.pushState
        ? "history"
        : "hash";
    this.root =
      options && options.root
        ? "/" + this.clearSlashes(options.root) + "/"
        : "/";
    return this;
  }

  getFragment() {
    let fragment = "";
    if (this.mode === "history") {
      fragment = this.clearSlashes(
        decodeURI(location.pathname + location.search)
      );
      fragment = fragment.replace(/\?(.*)$/, "");
      fragment = this.root != "/" ? fragment.replace(this.root, "") : fragment;
    } else {
      let match = window.location.href.match(/#(.*)$/g);
      fragment = match ? match[1] : "";
    }
    return this.clearSlashes(fragment);
  }

  clearSlashes(path) {
    return path
      .toString()
      .replace(/\/$/g, "")
      .replace(/^\//g, "");
  }

  add(re, handler) {
    if (typeof re == "function") {
      handler = re;
      re = "";
    }
    this.routes.push({ re: re, handler: handler });
    return this;
  }

  remove(param) {
    this.routes.forEach(router => {
      if (
        router.handler === param ||
        router.re.toString() === param.toString()
      ) {
        routes.splice(i, 1);
        return this;
      }
    });
    return this;
  }

  check(f) {
    let fragment = f || this.getFragment();
    this.routes.forEach(router => {
      let match = fragment.match(router.re);
      if (match) {
        //   //match.shift();
        router.handler.apply({}, match);
        return this;
      }
    });
    return this;
  }

  listen() {
    let self = this;
    let current = self.getFragment();
    // const fn = () => {
    //   if (current !== self.getFragment()) {
    //     current = self.getFragment();
    //     self.check(current);
    //   }
    // };
    // clearInterval(this.interval);
    // this.interval = setInterval(fn, 50);

    window.addEventListener(
      "navigate",
      e => {
        if (current !== self.getFragment()) {
          current = self.getFragment();
          self.check(current);
        }
      },
      false
    );

    return this;
  }

  navigate(path) {
    path = path ? path : "";
    if (this.mode === "history") {
      history.pushState(null, null, this.root + this.clearSlashes(path));
    } else {
      window.location.href =
        window.location.href.replace(/#.*$/g, "") + "#" + path;
    }

    const event = new CustomEvent("navigate", { detail: path });
    window.dispatchEvent(event);

    return this;
  }
}
