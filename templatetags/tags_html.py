from django import template
from django.conf import settings

register = template.Library()

@register.simple_tag
def css_include_tag(css):
	return "%s%s%s" % (settings.STATIC_URL, 'css/', css)

@register.simple_tag
def javascript_include_tag(js):
	return "%s%s%s" % (settings.STATIC_URL, 'js/', js)
