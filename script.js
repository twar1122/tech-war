document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");

    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            data.articles.forEach(article => {
                const newsItem = document.createElement("div");
                newsItem.classList.add("news-item");

                newsItem.innerHTML = `
                    <img src="${article.urlToImage}" alt="News Image">
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `;

                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => console.error("Error fetching news:", error));
});
