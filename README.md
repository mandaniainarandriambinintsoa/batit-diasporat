# Construction BTP Diaspora Showcase

Prototype de site metier pour une entreprise fictive de construction BTP et
renovation destinee a la diaspora. Antananarivo constitue le premier cas
d'usage, sans limiter la base a une seule ville.

Le projet suit le skill `site-web-metier` :

1. cadrage metier ;
2. trois directions de maquette ;
3. validation visuelle ;
4. implementation Next.js seulement apres choix d'une direction.

## Assets

Les maquettes full-page sont generees dans :

```txt
assets/design-directions/
```

## Commande de maquettes

Depuis ce dossier :

```bash
node scripts/render-design-directions.js
```

Le script utilise Playwright. S'il n'est pas installe localement, il reutilise
celui du projet MadaVoyage.
