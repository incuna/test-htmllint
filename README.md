# test-htmllint

Add html files to `tests` folder and run
```
npm test
```

## Tests

### typo.html
```
/Users/me/Code/test-htmllint/tests/typo.html
line 1  col 1   tag is not closed (E042)
```

### django-typo.html
```
/Users/me/Code/test-htmllint/tests/typo-django.html
line 100    col 1   indenting spaces must be used in groups of 4 (E036)
line 13 col 9   title "{% block title %}{% if self.seo_title %}{{ self.seo_title }}{% else %}{{ self.title }}{% endif %}{% endblock %}{% block title_suffix %}{% endblock %}" exceeds maximum length of 60 (E029)
line 11 col 9   void element should never close itself (E018)
line 12 col 9   void element should never close itself (E018)
line 14 col 9   void element should never close itself (E018)
line 15 col 9   void element should never close itself (E018)
line 23 col 12  value must match the format: dash (E011)
line 23 col 12  value must match the format: dash (E011)
line 23 col 12  value must match the format: dash (E011)
line 23 col 12  value must match the format: dash (E011)
line 45 col 34  attribute names must match the format: dash (E002)
line 51 col 34  attribute names must match the format: dash (E002)
line 64 col 78  value must match the format: dash (E011)
line 64 col 78  value must match the format: dash (E011)
line 64 col 78  value must match the format: dash (E011)
line 64 col 78  value must match the format: dash (E011)
line 64 col 78  value must match the format: dash (E011)
line 64 col 78  value must match the format: dash (E011)
line 2  col 49  text contains improperly escaped characters:  (E023)
line 106    col 20  value must match the format: dash (E011)
line 106    col 20  value must match the format: dash (E011)
line 106    col 20  value must match the format: dash (E011)
line 106    col 20  value must match the format: dash (E011)
```
