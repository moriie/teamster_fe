class User < ApplicationRecord

    has_secure_password

    validates :username, uniqueness: {case_sensitive: false}, length: {minimum: 4, maximum: 14}
    # add more validations
    
end
