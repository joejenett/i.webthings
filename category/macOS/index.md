---
layout: category
permalink: /category/macOS/
title: macOS
---
{% for post in site.categories.macOS %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}