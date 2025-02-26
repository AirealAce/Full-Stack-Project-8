useEffect(() => {
    const fetchDetail = async () => {
        const { data, error } = await supabase
            .from('Manure Posts')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            console.error('Error fetching details:', error);
        } else {
            setDetail(data);
            setLikeCount(data.likes); 
        }
    };

    fetchComments();
    fetchDetail();
}, [id, fetchComments]);  // Add fetchComments here
