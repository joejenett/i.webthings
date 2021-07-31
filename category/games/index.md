---
layout: category
permalink: /category/games/
title: games
---
{% for post in site.categories.games %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}