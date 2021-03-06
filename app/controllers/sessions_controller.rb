class SessionsController < ApplicationController

  def create
  auth_hash = request.env['omniauth.auth']

  @authorization = Authorization.find_by_provider_and_uid(auth_hash["provider"], auth_hash["uid"])
    if @authorization
      redirect_to "/profile"
    else
      user = User.new :name => auth_hash["info"]["nickname"]
      user.authorizations.build :provider => auth_hash["provider"],
                                :uid => auth_hash["uid"],
                                # :user_oauth_token => auth_hash["extra"]["access_token"].params[:oauth_token],
                                # :user_oauth_secret => auth_hash["extra"]["access_token"].params[:oauth_token_secret],
                                :oauth_token => params[:oauth_token],
                                :oauth_verifier => params[:oauth_verifier]
      user.save!
      if Rails.env == "development"
        redirect_to "http://localhost:3001/email?token=#{user.token}&id=#{user.id}"
      else
        redirect_to "/email?token=#{user.token}&id=#{user.id}"
      end
    end
  end



end
