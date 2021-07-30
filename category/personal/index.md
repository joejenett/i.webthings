---
layout: category
permalink: /category/personal/
title: personal
---
{% for post in site.categories.personal %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}