<template>
    <div class="social-buttons">
        <p class="text-center width-40 m-t-s"><button class="btn btn-social btn-facebook btn-block m-t-sm" @click="shareFacebook()"><i class="fa fa-facebook"></i> Share with Facebook</button></p>
            <p class="text-center width-40"><button class="btn btn-social btn-twitter btn-block m-t-sm" @click="shareTwitter()"><i class="fa fa-twitter"></i> Share with Twitter</button></p>
    </div>
</template>
<style scoped>
    .social-buttons {
        margin-top: 20px;
    }
</style>
<script>

    let postToTwitter = function(url)
    {
        let width  = 575,
            height = 400,
            left   = ($(window).width()  - width)  / 2,
            top    = ($(window).height() - height) / 2,
            opts   = 'status=1' +
                ',width='  + width  +
                ',height=' + height +
                ',top='    + top    +
                ',left='   + left

        window.open(url, 'twitter', opts)
        return false
    }

    let postToFacebook = function(fbData)
    {
        let url = 'http://www.facebook.com/dialog/feed?app_id=284529838408939' +
            '&link=' + fbData.href +
            '&picture=' + fbData.picture +
            '&name=' + encodeURIComponent(fbData.name) + 
            '&caption=' + encodeURIComponent(fbData.caption) + 
            '&description=' + encodeURIComponent(fbData.description) + 
            '&redirect_uri=http://popvox3.dev/widgets/share/facebook-popup' + 
            '&display=popup' 
        let width  = 575,
            height = 400,
            left   = ($(window).width()  - width)  / 2,
            top    = ($(window).height() - height) / 2,
            opts   = 'status=1' +
                ',width='  + width  +
                ',height=' + height +
                ',top='    + top    +
                ',left='   + left

        window.open(url, 'facebook', opts)
        return false
    }

    import Store from '../store'

    export default {
        data: () => {
            return {
                global: Store,
                baseShare: 'https://twitter.com/share?'
            }
        },
        methods: {
            shareTwitter: function()
            {
                let url = this.baseShare + '&text=' + this.global.socialShareData.share_text + '&url=' + this.global.socialShareData.share_url
                postToTwitter(url)
            },
            shareFacebook: function()
            {
                let fbData = {
                    name: this.global.socialShareData.share_text,
                    href: this.global.socialShareData.share_url,
                    picture: this.global.socialShareData.share_image,
                    caption: this.global.socialShareData.share_url,
                    description: this.global.socialShareData.share_description
                };
                postToFacebook(fbData);
            }
        }
    }
</script>
