# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_06_140110) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "goals", force: :cascade do |t|
    t.string "partner_type"
    t.bigint "partner_id"
    t.boolean "repeatable"
    t.string "time_basis"
    t.string "punishment"
    t.string "end_date"
    t.string "description"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["partner_type", "partner_id"], name: "index_goals_on_partner_type_and_partner_id"
  end

  create_table "networks", force: :cascade do |t|
    t.string "name"
    t.integer "points"
    t.string "bg_url"
    t.string "avatar_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "bio"
    t.string "age"
    t.string "email"
    t.string "location"
    t.string "avatar"
    t.integer "network_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
