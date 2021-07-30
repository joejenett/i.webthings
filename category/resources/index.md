---
layout: category
permalink: /category/resources/
title: resources
---
{% for post in site.categories.resources %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}