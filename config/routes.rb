Rails.application.routes.draw do
  resources :posts
  resources :users
  resources :bios
  post '/login', to: 'users#login'
end
