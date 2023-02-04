import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zelskvldvohrxlptgmaj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplbHNrdmxkdm9ocnhscHRnbWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNTM1NzAsImV4cCI6MTk5MDYyOTU3MH0.DLZG2AxW7b71vSDelWepFlryonTkgYK47uynpNmpsZo";
export const supabase = createClient(supabaseUrl, supabaseKey);
