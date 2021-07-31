---
layout: category
permalink: /category/gratis/
title: gratis
---
{% for post in site.categories.gratis %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}