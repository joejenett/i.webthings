---
layout: category
permalink: /category/cli/
title: cli
---
{% for post in site.categories.cli %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}