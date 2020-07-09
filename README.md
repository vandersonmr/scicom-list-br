<p align="center">
  <a href="https://vandersonmr.github.io/scicom-list-br/" target="_blank">
    <img src="https://raw.githubusercontent.com/vandersonmr/scicom-list-br/master/brand_files/brand_medium.png" alt="SciCom List BR">
    </a>
    <br>
    Lista dos podcasts que todo desenvolvedor brasileiro deveria experimentar acompanhar. 
    <a href="https://vandersonmr.github.io/scicom-list-br/" target="_blank">[VER SITE]</a>
  </p>

---

## Como contribuir? :rocket:

* **Fork & Pull Request:**
Edite o arquivo: `data/scicom.json` com a alteração.
Para adicionar um novo canal ou divulgador, utilize o template de objeto json abaixo (remova os comentários)
```javascript
  {
    "name":"",
    "description":"",
    "status":false, // false = desativado, true = em atividade
    "spotify_link":"",
    "website_link":"",
    "youtube_link":"",
    "instagram_link":"",
    "rss_link":"",
    "soundclound_link":"",
    "twitter_at":"", // username do twitter, sem '@'
    "facebook_url":"", 
    "image":"", // image link
    "language":"pt_br" // en
  }
```
Lembre-se de verificar se o arquivo json final é válido.

**Por Issue, usando flags no titulo:**

* **[UPDATE]** -> Para sugestão de atualizações de dados e links
* **[NEW]** -> Para sugestão de novo canal ou divulgador na lista

Issues sobre qualquer outro assunto que não seja adição e atualização de lista, podem ser abertos sem FLAG no titulo.

[![Analytics](https://www.googletagmanager.com/gtag/js?id=UA-172214430-1)](https://vandersonmr.github.io/scicom-list-br/)
