function validate() {

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let isCompany = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let validResult = $('#valid');

    isCompany.on('change', function () {
        if (this.checked) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    });

    $('#submit').on('click', function (ev) {
        ev.preventDefault();

        let userNameIsCorrect = validateInput(/^[A-Za-z\d]{3,20}$/g, username.val());
        userNameIsCorrect ? username.css('border', 'none') : username.css('border', '2px solid red');

        let emailIsCorrect = validateInput(/.*?@.*?\..*/g, email.val());
        emailIsCorrect ? email.css('border', 'none') : email.css('border', '2px solid red');


        let passwordIsCorrect = false;
        if (password.val() === confirmPassword.val()) {
            passwordIsCorrect = validateInput(/^\w{5,15}$/g, password.val());
        }
        passwordIsCorrect ? password.css('border', 'none') && confirmPassword.css('border', 'none')
            : password.css('border', '2px solid red') && confirmPassword.css('border', '2px solid red') ;


        let companyNumberIsValid = null;
        if (document.getElementById('company').checked) {
            companyNumberIsValid = validateCompanyNumber(Number(companyNumber.val()));
            console.log(companyNumberIsValid);
        }
        companyNumberIsValid ? companyNumber.css('border', 'none') : companyNumber.css('border', '2px solid red');

        if (userNameIsCorrect && passwordIsCorrect && emailIsCorrect && (companyNumberIsValid == null || companyNumberIsValid)) {
            validResult.css('display', 'block');
        }

    });

    function validateCompanyNumber(number) {
        return number >= 1000 && number <= 9999;
    }

    function validateInput(pattern, input) {
        return pattern.test(input);
    }
}