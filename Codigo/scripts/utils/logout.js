const userLogout = document.getElementById('logOut');
userLogout.addEventListener('click', () => {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html'
})