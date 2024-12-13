const passwordInput = document.getElementById('password');
        const progressBarInner = document.getElementById('progress-bar-inner');

        passwordInput.addEventListener('input', () => {
            const password = passwordInput.value.trim();
            const strength = getPasswordStrength(password);

            if (strength === 'strong') {
                progressBarInner.style.width = '100%';
                progressBarInner.style.backgroundColor = 'green';
            } else if (strength === 'weak') {
                progressBarInner.style.width = '50%';
                progressBarInner.style.backgroundColor = 'yellow';
            } else {
                progressBarInner.style.width = '0';
                progressBarInner.style.backgroundColor = '#e0e0e0';
            }
        });

        function getPasswordStrength(password) {
            const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$");
            const weakRegex = new RegExp("^(?=.*[a-z])(?=.*\\d)[A-Za-z\\d]{6,}$");

            if (strongRegex.test(password)) {
                return 'strong';
            } else if (weakRegex.test(password)) {
                return 'weak';
            } else {
                return 'none';
            }
        }