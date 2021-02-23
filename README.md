Spooky Words
=================

This package returns the curated lists of extremely scary words, as used in headstone names and ghost stories.

Originally based on [`friendly-words`](https://www.npmjs.com/package/friendly-words) and made collaboratively by  myself, Steph Monette, Allyson Lubimir, Anjali Patel, Greg Weil, and Esteban Molina-Estolano.


Usage
---

```
const spookyWords = require('spooky-words');

spookyWords.predicates;
> ["abnormal","accursed","acrid","afraid","aghast","alarming",...

spookyWords.objects;
> ["basilisk","bat","beast","blood","bone","broomstick",...

spookyWords.teams;
> ["alliance","assembly","band","barrel","batch","bed",...

spookyWords.collections;
> ["accrual","aggregation","analects","anthology","arcana","arcanum",...
```


The Words
---------

The words are pulled from curated files. We want the words and their pairings to be extremely scary etc.  They should also be words that could be used in spells or to conjure the undead.

The Word Files
--------------

Our word lists are highly-opinionated lists of *predicates* and *direct objects*.  This structure allows us to put together word pairs that are more likely to make grammatical sense, and therefore tend to be easier to say, type, and remember.

`words/objects.txt`

> The direct object receives the action of the sentence. The direct object is usually a noun or pronoun.

`words/predicates.txt`

> The predicate expresses action or being within the sentence. The simple predicate contains the verb and can also contain modifying words, phrases, or clauses.

`words/teams.txt`

> This is a list of synonyms for "team".  They're a special subset of objects.

`words/collections.txt`

> This is a list of synonyms for "collection".

For our purposes, the predicates are mostly verbs and adjectives.

It's OK for a word to be duplicated between the objects and predicates lists so long as that word is valid in both contexts,  e.g. "buffalo-buffalo" or "lavender-lavender".

Within a given file, the words should be alphabetized, distinct, and contain only lower-case alphabetic ASCII characters.  These constraints are checked at build time.

