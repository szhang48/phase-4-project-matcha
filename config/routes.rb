Rails.application.routes.draw do

  
  resources :posts, only: [:index,:create]
  resources :users, only: [:index,:create ]
  resources :bios, only: [:index, :show, :create ]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
    # route to test your configuration
    get '/hello', to: 'application#hello_world'

    # root to: "public#home"
end
