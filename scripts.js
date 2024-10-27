document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const darkModeStyle = document.createElement('style');
darkModeStyle.innerHTML = `
    body.dark-mode {
        background-color: #282c34;
        color: white;
    }
    header.dark-mode, footer.dark-mode {
        background-color: #1c1e22;
    }
    nav a.dark-mode {
        color: #bbb;
    }
    .intro.dark-mode {
        background-color: #1c1e22;
    }
    .feature-item.dark-mode {
        background-color: #333;
        color: white;
    }
    .testimonials.dark-mode {
        background-color: #1c1e22;
    }
    .testimonial-item.dark-mode {
        background-color: #444;
        color: white;
    }
`;
document.head.appendChild(darkModeStyle);
