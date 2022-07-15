console.log("TEST2")

const origOpen = window.XMLHttpRequest.prototype.open;
window.XMLHttpRequest.prototype.open = function() {
  this.url = arguments[1];
  console.log("KAKA URL2", this.url);
  //debugger;
  return origOpen.apply(this, [].slice.call(arguments));
};

(function(xhr) {

    var XHR = XMLHttpRequest.prototype;

    var open = XHR.open;
    var send = XHR.send;
    //var setRequestHeader = XHR.setRequestHeader;

    XHR.open = function(method, url) {
        this._method = method;
        this._url = url;
        this._requestHeaders = {};
        this._startTime = (new Date()).toISOString();

        console.log("KAKA METHOD", method);
        console.log("KAKA URL", url);

        return open.apply(this, arguments);
    };

    /*XHR.setRequestHeader = function(header, value) {
        this._requestHeaders[header] = value;
        return setRequestHeader.apply(this, arguments);
    };*/

})(XMLHttpRequest);