class User < ApplicationRecord

    has_secure_password

    has_many :goals
    has_many :partner_goals, class_name: 'Goal', as: :partner
    has_one :network
    has_many :network_goals, through: :network, source: :partner, source_type: 'Goal'

    validates :username, uniqueness: {case_sensitive: false}, length: {minimum: 4, maximum: 14}
    # add more validations
    
end
