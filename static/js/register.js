document.addEventListener("DOMContentLoaded", function() {
    const togglePassword = document.getElementById("toggle-password");
    const passwordInput = document.getElementById("password-input");
    if (togglePassword && passwordInput) {
        let visible = false;
        togglePassword.addEventListener("click", function() {
            visible = !visible;
            passwordInput.type = visible ? "text" : "password";
            togglePassword.textContent = visible ? "🙈" : "👁";
        });
    }

    const toggleConfirmPassword = document.getElementById("toggle-confirm-password");
    const confirmPasswordInput = document.getElementById("confirm-password-input");
    if (toggleConfirmPassword && confirmPasswordInput) {
        let visibleConfirm = false;
        toggleConfirmPassword.addEventListener("click", function() {
            visibleConfirm = !visibleConfirm;
            confirmPasswordInput.type = visibleConfirm ? "text" : "password";
            toggleConfirmPassword.textContent = visibleConfirm ? "🙈" : "👁";
        });
    }
});
