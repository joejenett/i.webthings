---
layout: category
permalink: /category/design/
title: design
---
{% for post in site.categories.design %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}