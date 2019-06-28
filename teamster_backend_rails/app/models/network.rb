class Network < ApplicationRecord
    has_many :goals, as: :partner
    has_many :users
end
