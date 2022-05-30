import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kzvenidrmwlvyhxieqmy.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

function loginWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
        // provider can be 'github', 'google', 'gitlab', and more
        provider: 'google'
      })
}