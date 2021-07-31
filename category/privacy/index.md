---
layout: category
permalink: /category/privacy/
title: privacy
---
{% for post in site.categories.privacy %}
 <li><span>{{ post.date | date:'%B %e, %Y' }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}