class User < ApplicationRecord

    has_secure_password

    has_many :goals
    has_many :partner_goals, class_name: 'Goal', as: :partner
    has_one :network
    has_many :network_goals, through: :network, source: :partner, source_type: 'Goal'

    validates :username, uniqueness: { case_sensitive: true }, length: { minimum: 4, maximum: 14 }
    validates :age, exclusion: { in: 0..18 }
    validates :email, format: { with: /\S+@[a-z]+.com/i }
    validates :bio, length: { maximum: 180 }
    validates :location, format: { with: /[0-9]{5}/ }
    
end
