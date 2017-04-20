insert into subscribers (name, email)
values ($1, $2)
returning name
