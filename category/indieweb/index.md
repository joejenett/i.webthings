---
layout: category
permalink: /category/indieweb/
title: indieweb
---
{% for post in site.categories.indieweb %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}