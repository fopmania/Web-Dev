    function _(x) {
        return document.getElementById(x);
    }

var JJquiz = (function () {
    
    var userData;

    function User(pFirst, pLast, pEmail, pPhone, pAddress) {
        this.firstName = pFirst
        this.lastName = pLast
        this.email = pEmail
        this.phone = pPhone
        this.address = pAddress
    }

    function saveUser() {
        localStorage.setItem("JJquizUser", JSON.stringify(userData));
    }

    function loadUser() {
        userData = JSON.parse(localStorage.getItem("JJquizUser"));
        if (userData === null) {
            userData = []
        }
    }
    
    
    loadUser();

    
    var JJobj = {};

    JJobj.clearUser = function () {
        userData = [];
        saveCart();
    }

    JJobj.setUser = function (pFirst, pLast, pEmail, pPhone, pAddress) {

		userData = new User(pFirst, pLast, pEmail, pPhone, pAddress);
        saveUser();
    };
    
    JJobj.getUser = function (){
    	return userData;
    }

    
    return JJobj;
})();




