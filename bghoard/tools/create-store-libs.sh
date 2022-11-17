# Feature List
nx g @nrwl/angular:lib --directory=store feature-list \
    --routing --parentModule=apps/store/src/app/app.module.ts --lazy --style=scss
nx g @nrwl/angular:component game-list --project=store-feature-list